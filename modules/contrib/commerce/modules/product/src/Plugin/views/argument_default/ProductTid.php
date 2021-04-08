<?php

namespace Drupal\commerce_product\Plugin\views\argument_default;

use Drupal\taxonomy\TermInterface;
use Drupal\node\NodeInterface;
use Drupal\commerce_product\Entity\ProductInterface;
use Drupal\taxonomy\Plugin\views\argument_default\Tid;

class ProductTid extends Tid {

  /**
   * {@inheritdoc}
   */
  public function getArgument() {
    // Load default argument from taxonomy page.
    if (!empty($this->options['term_page'])) {
      if (($taxonomy_term = $this->routeMatch->getParameter('taxonomy_term')) && $taxonomy_term instanceof TermInterface) {
        return $taxonomy_term->id();
      }
    }
    // Load default argument from node.
    if (!empty($this->options['node'])) {
      // Just check, if a node could be detected.
      if (($node = $this->routeMatch->getParameter('node')) && $node instanceof NodeInterface) {
        $taxonomy = [];
        foreach ($node->getFieldDefinitions() as $field) {
          if ($field->getType() == 'entity_reference' && $field->getSetting('target_type') == 'taxonomy_term') {
            $taxonomy_terms = $node->{$field->getName()}->referencedEntities();
            /** @var \Drupal\taxonomy\TermInterface $taxonomy_term */
            foreach ($taxonomy_terms as $taxonomy_term) {
              $taxonomy[$taxonomy_term->id()] = $taxonomy_term->bundle();
            }
          }
        }
        if (!empty($this->options['limit'])) {
          $tids = [];
          // filter by vocabulary
          foreach ($taxonomy as $tid => $vocab) {
            if (!empty($this->options['vids'][$vocab])) {
              $tids[] = $tid;
            }
          }
          return implode($this->options['anyall'], $tids);
        }
        // Return all tids.
        else {
          return implode($this->options['anyall'], array_keys($taxonomy));
        }
      }
      // Just check, if a product could be detected.
      elseif (($product = $this->routeMatch->getParameter('commerce_product')) && $product instanceof ProductInterface) {
        $taxonomy = [];
        foreach ($product->getFieldDefinitions() as $field) {
          if ($field->getType() == 'entity_reference' && $field->getSetting('target_type') == 'taxonomy_term') {
            $taxonomy_terms = $product->{$field->getName()}->referencedEntities();
            /** @var \Drupal\taxonomy\TermInterface $taxonomy_term */
            foreach ($taxonomy_terms as $taxonomy_term) {
              $taxonomy[$taxonomy_term->id()] = $taxonomy_term->bundle();
            }
          }
        }
        if (!empty($this->options['limit'])) {
          $tids = [];
          // filter by vocabulary
          foreach ($taxonomy as $tid => $vocab) {
            if (!empty($this->options['vids'][$vocab])) {
              $tids[] = $tid;
            }
          }
          return implode($this->options['anyall'], $tids);
        }
        // Return all tids.
        else {
          return implode($this->options['anyall'], array_keys($taxonomy));
        }
      }
    }
  }

}
