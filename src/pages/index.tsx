import React from 'react';
import Layout from '../components/Layout';


export default function Registros({ }) {
    return (
        <Layout>
            <div className="container mx-auto px-2 md:grid grid-flow-col -mt-2">
                <div className="my-6 border-black border-t-8 border-r-8 rounded-r-3xl shadow-lg">
                    <h1 className="text-center my-4 text-6xl">SELECIONAR UM END POINT</h1>
                    <div className="grid grid-cols-2">

                        {/* END POINTS DE REGISTRO */}
                        <div className="bg-yellow-400">
                            <h1 className="text-center my-4 text-3xl">END POINTS DE REGISTRO</h1>
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
                                <a href='/registro/classificacao_piloto' className="classA" target="_blank">REGISTRO DE PONTOS (Piloto) = usado para registrar uma nova pontuação</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/classificacao_equipe' className="classA" target="_blank">REGISTRO DE PONTOS (Equipe) = usado para registrar uma nova pontuação</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/ultima_corrida' className="classA" target="_blank">REGISTRO DA ÚLTIMA CORRIDA = usado para registrar a última corrida</a>
                            </p>
                        </div>

                        {/* END POINTS DE UPDATE */}
                        <div className="bg-blue-400">
                            <h1 className="text-center my-4 text-3xl">END POINTS DE UPDATE</h1>
                            <p className="text-center text-xl">
                                <a href='/registro/piloto' className="classA" target="_blank">UPDATE DE PILOTOS = usado para alterar info do piloto</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/equipe' className="classA" target="_blank">UPDATE DE EQUIPE = usado para alterar info da equipe</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/noticia' className="classA" target="_blank">UPDATE DE NOTÍCIA = usado para alterar info da notícia</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/fotos' className="classA" target="_blank">UPDATE DE FOTOS = usado para alterar info de uma etapa</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/videos' className="classA" target="_blank">UPDATE DE VÍDEOS = usado para alterar os vídeos</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/classificacao_piloto' className="classA" target="_blank">UPDATE DE PONTOS (Piloto) = usado para alterar pontuação</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/classificacao_equipe' className="classA" target="_blank">UPDATE DE PONTOS (Equipe) = usado para alterar pontuação</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/ultima_corrida' className="classA" target="_blank">UPDATE DA ÚLTIMA CORRIDA = usado para alterar info da última corrida</a>
                            </p>
                        </div>

                        {/* END POINTS DE DELETE */}
                        <div className="bg-red-400">
                            <h1 className="text-center my-4 text-3xl">END POINTS DE DELETE</h1>
                            <p className="text-center text-xl">
                                <a href='/registro/piloto' className="classA" target="_blank">EXCLUIR PILOTO = usado para excluir novo piloto</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/equipe' className="classA" target="_blank">EXCLUIR EQUIPE = usado para excluir equipe</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/noticia' className="classA" target="_blank">EXCLUIR NOTÍCIA = usado para excluir notícia</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/fotos' className="classA" target="_blank">EXCLUIR FOTOS = usado para excluir uma etapa</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/videos' className="classA" target="_blank">EXCLUIR VÍDEOS = usado para excluir vídeos</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/classificacao_piloto' className="classA" target="_blank">EXCLUIR PONTOS (Piloto) = usado para excluir uma pontuação</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/classificacao_equipe' className="classA" target="_blank">EXCLUIR PONTOS (Equipe) = usado para excluir uma pontuação</a>
                            </p>
                            <p className="text-center text-xl">
                                <a href='/registro/ultima_corrida' className="classA" target="_blank">EXCLUIR ÚLTIMA CORRIDA = usado para excluir uma corrida</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </Layout >
    )
};