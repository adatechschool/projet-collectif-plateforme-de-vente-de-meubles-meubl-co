<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerDpV4ACa\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerDpV4ACa/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerDpV4ACa.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerDpV4ACa\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerDpV4ACa\App_KernelDevDebugContainer([
    'container.build_hash' => 'DpV4ACa',
    'container.build_id' => '40fda875',
    'container.build_time' => 1719565601,
    'container.runtime_mode' => \in_array(\PHP_SAPI, ['cli', 'phpdbg', 'embed'], true) ? 'web=0' : 'web=1',
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerDpV4ACa');
