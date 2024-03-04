/*
-- Se o nome do arquivo tem "[]" significa que temos algo dinamico.
-- Para acessar essas informações dinamicas temos que utilizar o import abaixo.
*/

import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Buscar() {
    const router = useRouter()
    const codigo = router.query.codigo
    

    return (
        <div>
            <h1>Rotas / {codigo} / Buscar!!!</h1>
            <Link href="/rotas">
                <a>
                    <button>Voltar</button>
                </a>
            </Link>
        </div>
    )
}