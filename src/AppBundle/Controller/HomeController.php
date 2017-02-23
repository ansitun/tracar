<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class HomeController extends Controller
{
    /**
     * Homepage / Index
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
    
    /**
     * Contact Us Form
     */
    public function contactAction(Request $request)
    {
        $email = $request->request->get('email');
        $phone = $request->request->get('phone');
        $name = $request->request->get('name');
        $message = $request->request->get('message');

        $mail = \Swift_Message::newInstance()
        ->setSubject('Contact Request')
        ->setFrom($this->container->getParameter('mailer_user'))
        ->setTo("ansitun@gmail.com")
        ->setBody("Hi Admin,\n\nYou have received a message from the below contact.\n\nName: $name\n\nEmail: $email\n\nMobile: $phone\n\nMessage:\n $message")
        ;

        $result = $this->get('mailer')->send($mail);
        
        $res = new JsonResponse();
        if($result == 1) {
           $res->setData(array(
                'data' => true
            ));
        } else {
            $res->setData(array(
                'data' => false
            ));
        }
        
        return $res;
    }
}
