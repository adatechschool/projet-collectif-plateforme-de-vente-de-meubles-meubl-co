<?php

namespace ContainerDpV4ACa;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getSupplyControllershowService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.5NiBNV0.App\Controller\api\SupplyController::show()' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.5NiBNV0.App\\Controller\\api\\SupplyController::show()'] = ($container->privates['.service_locator.5NiBNV0'] ?? $container->load('get_ServiceLocator_5NiBNV0Service'))->withContext('App\\Controller\\api\\SupplyController::show()', $container);
    }
}
