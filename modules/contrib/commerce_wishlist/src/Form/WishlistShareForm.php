<?php

namespace Drupal\commerce_wishlist\Form;

use Drupal\commerce_wishlist\Mail\WishlistShareMailInterface;
use Drupal\Component\Utility\Html;
use Drupal\Core\Ajax\AjaxFormHelperTrait;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\PrependCommand;
use Drupal\Core\Ajax\CloseDialogCommand;
use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides the wishlist share form.
 */
class WishlistShareForm extends EntityForm {

  use AjaxFormHelperTrait;

  /**
   * The wishlist share mail.
   *
   * @var \Drupal\commerce_wishlist\Mail\WishlistShareMailInterface
   */
  protected $wishlistShareMail;

  /**
   * Constructs a new WishlistUserForm object.
   *
   * @param \Drupal\commerce_wishlist\Mail\WishlistShareMailInterface $wishlist_share_mail
   *   The wishlist share mail.
   */
  public function __construct(WishlistShareMailInterface $wishlist_share_mail) {
    $this->wishlistShareMail = $wishlist_share_mail;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('commerce_wishlist.wishlist_share_mail')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function form(array $form, FormStateInterface $form_state) {
    $form['#tree'] = TRUE;
    $form['#attached']['library'][] = 'core/drupal.dialog.ajax';
    // Workaround for core bug #2897377.
    $form['#id'] = Html::getId($form_state->getBuildInfo()['form_id']);

    $form['to'] = [
      '#type' => 'email',
      '#title' => $this->t('Recipient Email'),
      '#required' => TRUE,
    ];

// COMBAK tahoe edit

    $form['sender_name'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Your Name'),
      '#required' => FALSE,
    ];

    $form['sender_message'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Your Message'),
      '#required' => FALSE,
    ];


// COMBAK eo tahoe edit

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  protected function actions(array $form, FormStateInterface $form_state) {
    $actions['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Share List'),
      '#submit' => ['::submitForm'],
    ];
    if ($this->isAjax()) {
      $actions['submit']['#ajax']['callback'] = '::ajaxSubmit';
    }

    return $actions;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    /** @var \Drupal\commerce_wishlist\Entity\WishlistInterface $wishlist */
    $wishlist = $this->entity;
    $to = $form_state->getValue('to');

    // COMBAK: TAHOE CODE
    $_SESSION['sender_data'] = [];

    $sender_data = [
        '#theme' => 'commerce_wishlist_share_mail',
        '#sender_name' => $form_state->getValue('sender_name'),
        '#sender_message' => $form_state->getValue('sender_message')
    ];

    $_SESSION['sender_data'] = $sender_data;
    // COMBAK: EO TAHOE CODE

    $this->wishlistShareMail->send($wishlist, $to);

    $this->messenger()->addStatus($this->t('Shared the product list to @sender_name at the following email address: @recipient.', [
      '@recipient' => $to,
      '@sender_name' => $sender_data['#sender_name']
    ]));
    $form_state->setRedirectUrl($wishlist->toUrl('user-form'));
  }

  /**
   * {@inheritdoc}
   */
  protected function successfulAjaxSubmit(array $form, FormStateInterface $form_state) {
    $response = new AjaxResponse();
    $response->addCommand(new PrependCommand('.commerce-wishlist-form', ['#type' => 'status_messages']));
    $response->addCommand(new CloseDialogCommand());

    return $response;
  }

}
