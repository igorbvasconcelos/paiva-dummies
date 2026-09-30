import "./cardReceita.css";
import Link from "next/link";

export default function CardReceita({id,nome,imagem}){
    return(

                            <div
                                key={id}
                                className="card-receita"
                            >

                                <img
                                    className="avatar-receita"
                                    src={imagem}
                                    alt={`Foto da receita ${nome}`}
                                />

                                <h3 className="nome-receita">
                                    {nome}
                                    <br />

                                    
                                </h3>
                                    <Link href={`../receitas/${id}`}>
                                        Saiba mais
                                    </Link>
                            </div>
        
    )
}