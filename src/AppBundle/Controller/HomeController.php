<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class HomeController extends Controller
{
    /**
     * Homepage
     */
    public function indexAction(Request $request, $slug)
    {
        $local = $request->attributes->get('_locale');
        
        if($local) {
            if($local && strpos($local, "en")) {
                $slug = "en";
            } else {
                $slug = "de";
            }
        } elseif(!$slug) {
            $slug = "de";
        }
        
        $translator = $this->get('translator');
        $translator->setLocale($slug);
        
        return $this->render('AppBundle:Home:index.html.twig');
    }
}
