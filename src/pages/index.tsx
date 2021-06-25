import React from 'react';
import Layout from '../components/Layout';


export default function Registros({ }) {
    return (
        <Layout>
            <div className="container mx-auto px-2 md:grid grid-flow-col -mt-2">
                <div className="my-6 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg">
                    <h1 className="text-center my-4 text-4xl md:text-6xl">SELECIONAR UM END POINT</h1>
                    <p className="text-center text-xl">
                        <a href='/registro/piloto' className="classA" target="_blank">REGISTRO DE PILOTOS = usado para registrar um novo piloto</a>
                    </p>
                    <p className="text-center text-xl">
                        <a href='/registro/equipe' className="classA" target="_blank">REGISTRO DE EQUIPE = usado para registrar uma nova equipe</a>
                    </p>
                    <p className="text-center text-xl">
                        <a href='/registro/noticia' className="classA" target="_blank">REGISTRO DE NOTÍCIA = usado para registar uma nova notícia</a>
                    </p>
                    <p className="text-center text-xl">
                        <a href='/registro/fotos' className="classA" target="_blank">REGISTRO DE FOTOS = usado para registrar fotos de uma nova etapa</a>
                    </p>
                    <p className="text-center text-xl">
                        <a href='/registro/videos' className="classA" target="_blank">REGISTRO DE VÍDEOS = usado para registrar novos vídeos</a>
                    </p>
                    <p className="text-center text-xl">
                        <a href='/registro/classificacao_piloto' className="classA" target="_blank">REGISTRO DE CLASSIFICAÇÃO (Piloto) = usado para registrar uma nova pontuação para piloto</a>
                    </p>
                    <p className="text-center text-xl">
                        <a href='/registro/classificacao_equipe' className="classA" target="_blank">REGISTRO DE CLASSIFICAÇÃO (Equipe) = usado para registrar uma nova pontuação para equipe</a>
                    </p>
                    <p className="text-center text-xl">
                        <a href='/registro/ultima_corrida' className="classA" target="_blank">REGISTRO DA ÚLTIMA CORRIDA = usado para registrar os participantes e nome da última corrida</a>
                    </p>
                </div>
            </div>
        </Layout>
    )
};