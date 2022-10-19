import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="m-auto mt-5">
            <h1>Bienvenue sur BadSecApp</h1>

            <p>
                BadSecApp est une application créée pour la formation à la programmation défensive.
            </p>

            <p>
                Il s’agit d’une application Blazor WebAssembly qui incorpore intentionnellement de
                nombreuses failles de sécurité, dans le but à la fois de faire comprendre comment
                ces vulnérabilités fonctionnent, mais aussi d’entrainer les développeurs à les
                détecter dans un code réel. Le code est volontairement peu réaliste, de façon à
                faciliter la découverte des problèmes de sécurité sans que le code soit mélangé à
                instructions pour l’amélioration du parcours utilisateur ou de l’interface. Les
                fonctionnalités sont réduites au minimum pour représenter des cas existants de
                manière réaliste mais très légère.
            </p>

            <p>
                Après un premier apprentissage rendu très simple par cet aspect compact de
                l’application cible, les développeurs formés sont encouragés à réaliser la même
                opération de recherche de failles, exploitation et correction sur une application
                plus complexe comme{" "}
                <a href="https://github.com/jerryhoff/WebGoat.NET">WebGoat.NET</a> ou{" "}
                <a href="https://github.com/srini0x00/dvta">DVTA</a>, voire{" "}
                <a href="https://github.com/bkimminich/juice-shop">Juice Shop</a> (qui pour le coup
                n’est pas en .NET mais en NodeJS).
            </p>
        </Container>
    );
};

export default Home;
