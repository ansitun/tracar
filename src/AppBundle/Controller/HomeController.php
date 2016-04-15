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
        $translator = $this->get('translator');
        $translator->setLocale($slug);
        
        return $this->render('AppBundle:Home:index.html.twig');
    }
}
