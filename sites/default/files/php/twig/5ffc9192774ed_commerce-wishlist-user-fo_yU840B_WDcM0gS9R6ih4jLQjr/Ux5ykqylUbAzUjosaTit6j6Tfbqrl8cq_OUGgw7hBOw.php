<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/contrib/commerce_wishlist/templates/commerce-wishlist-user-form.html.twig */
class __TwigTemplate_56ed3e0279906dc66ff9f945ef994e22658085aa17d8a6ed0b74f66af9302873 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 12
        echo "<div class=\"wishlist-user-form clearfix\">
  ";
        // line 13
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "header", [], "any", false, false, true, 13), 13, $this->source), "html", null, true);
        echo "
  <div class=\"wishlist-items\">
    ";
        // line 15
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "items", [], "any", false, false, true, 15));
        foreach ($context['_seq'] as $context["key"] => $context["item"]) {
            if ((twig_first($this->env, $context["key"]) != "#")) {
                // line 16
                echo "      <div class=\"wishlist-item\">
        <div class=\"wishlist-item__entity\">
          ";
                // line 18
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "entity", [], "any", false, false, true, 18), 18, $this->source), "html", null, true);
                echo "
        </div>
        
        <div class=\"wishlist-item__actions\">
          ";
                // line 22
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "actions", [], "any", false, false, true, 22), "remove", [], "any", false, false, true, 22), 22, $this->source), "html", null, true);
                echo "
        </div>
      </div>
    ";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 26
        echo "  </div>
  ";
        // line 27
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(($context["form"] ?? null), 27, $this->source), "header", "items"), "html", null, true);
        echo "
</div>
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/commerce_wishlist/templates/commerce-wishlist-user-form.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  77 => 27,  74 => 26,  63 => 22,  56 => 18,  52 => 16,  47 => 15,  42 => 13,  39 => 12,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/commerce_wishlist/templates/commerce-wishlist-user-form.html.twig", "/app/modules/contrib/commerce_wishlist/templates/commerce-wishlist-user-form.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 15);
        static $filters = array("escape" => 13, "first" => 15, "without" => 27);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['for'],
                ['escape', 'first', 'without'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
