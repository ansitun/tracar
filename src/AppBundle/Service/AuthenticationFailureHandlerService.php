<?php

namespace AppBundle\Service;

use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Security\Core\Exception\AuthenticationException;

class AuthenticationFailureHandlerService implements  AuthenticationFailureHandlerInterface {
    protected $container;
    protected $router;

    public function __construct( $container, $router ) {
        $this->container = $container;
        $this->router = $router;
    }

    public function onAuthenticationFailure( Request $request, AuthenticationException $exception ) {
        $url = $this->router->generate('fos_user_security_login', array("slug" => $exception->getMessage()));
        
        return new RedirectResponse( $url );
    }
}