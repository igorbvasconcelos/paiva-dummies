import "./receitas.css";

export default async function Receita({ params }) {

    const { id } = await params;

    const resposta = await fetch(
        `https://dummyjson.com/recipes/${id}`
    );

    const receita = await resposta.json();

    return (
        <main className="detalhes-container">

            <h1>{receita.name}</h1>

            <img
                className="imagem-detalhes"
                src={receita.image}
                alt={`Foto da receita ${receita.name}`}
            />

            <div className="informacoes-receita">

                <p>
                    <strong>ID:</strong> {receita.id}
                </p>

                <p>
                    <strong>Categoria:</strong> {receita.cuisine}
                </p>

                <p>
                    <strong>Dificuldade:</strong> {receita.difficulty}
                </p>

                <p>
                    <strong>Porções:</strong> {receita.servings}
                </p>

                <p>
                    <strong>Tempo de preparo:</strong>{" "}
                    {receita.prepTimeMinutes} minutos
                </p>

                <p>
                    <strong>Tempo de cozimento:</strong>{" "}
                    {receita.cookTimeMinutes} minutos
                </p>

                <p>
                    <strong>Calorias por porção:</strong>{" "}
                    {receita.caloriesPerServing}
                </p>

                <p>
                    <strong>Avaliação:</strong>{" "}
                    {receita.rating}
                </p>

                <p>
                    <strong>Quantidade de avaliações:</strong>{" "}
                    {receita.reviewCount}
                </p>

            </div>

            <section>
                <h2>Ingredientes</h2>

                <ul>
                    {receita.ingredients.map((ingrediente, index) => (
                        <li key={index}>
                            {ingrediente}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Preparo</h2>

                <ol>
                    {receita.instructions.map((instrucao, index) => (
                        <li key={index}>
                            {instrucao}
                        </li>
                    ))}
                </ol>
            </section>

        </main>
    );
}
