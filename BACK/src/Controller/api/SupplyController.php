<?php

namespace App\Controller\api;

use App\Repository\MeubleEcoRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;

class SupplyController extends AbstractController
{
    #[Route('/api/{supply}')]
    public function index(MeubleEcoRepository $repository) //ici on traite toute la table meuble_eco
    {
        $supplies = $repository->findAll();
        //dd($supplies); //var_dump de $supplies
        return $this -> json($supplies, 200, [], [
            'groups' => ['supply.index']
        ]);
    }

    #[Route('/api/supply/{id}')]
    public function show(MeubleEcoRepository $repository, int $id) //ici on ne traite que l'informtion id
    {
        $furniture = $repository->findOneBy(['id' => $id]); //la methode recupere l'info par l'id
        //dd($furniture); //var_dump $furniture
        return $this -> json($furniture, 200, [], [
            'groups' => ['supply.show']
        ]);
    }
}