"use client";

import { useEffect, useState } from "react";
import CardReceita from "@/components/cardReceita";
import "./dummy.css";

export default function Receitas() {
    const [listaReceitas, setListaReceitas] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/recipes?limit=67")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setListaReceitas(data.recipes);
                setMsgErro("");
            })
            .catch(erro => setMsgErro(erro.message));
    }, []);

    return (
        <main className="container">

            <h1 className="titulo-pagina">
                Página de receitas
            </h1>

            {msgErro !== "" && (
                <p className="mensagem-erro">
                    Erro: {msgErro}
                </p>
            )}

            {listaReceitas.length > 0 ? (

                <div className="grid-receita">

                    {listaReceitas.map(receita => {
                                return <CardReceita
                                key={receita.id}
                                id = {receita.id}
                                imagem={receita.image} 
                                nome={receita.name}
                                />
                            
                            })}

                </div>

            ) : (

                <div className="mensagem-vazia">
                    Sem receitas por enquanto!
                    Tente novamente mais tarde...
                </div>

            )}

        </main>
    );
}