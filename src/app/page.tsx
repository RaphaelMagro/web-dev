import Link from "next/link";
import { SideBar } from "./_components/sidebar";
import { TopNav } from "./_components/topnav";

export default function HomePage() {
  return (
    <div>
      <SideBar />
      <main className="mt-10 ml-90 p-6 pt-60">
        <h1 className="text-3xl font-bold">Main Content Area</h1>
        <p className="text-3xl">
          This is your dashboard content below the navbar and next to the
          sidebar. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Repellat blanditiis harum iusto, sunt quidem incidunt corporis in
          provident impedit, unde, veniam fugit. Quo libero odit fuga voluptatem
          at deserunt praesentium, atque nesciunt voluptates vitae ea. Nostrum
          quod, praesentium aspernatur maxime exercitationem nesciunt laborum
          corrupti eos tempora adipisci provident totam quisquam. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tenetur maiores deleniti
          alias accusantium reiciendis sint, facere sequi quis! Error ipsa
          facere, voluptatum distinctio minima repellendus minus deserunt, iste
          porro blanditiis cupiditate aliquid ullam reiciendis sint ipsum magni
          earum. Inventore error corporis sequi consequatur nulla natus et
          veritatis, nobis deleniti non quo alias qui recusandae necessitatibus
          porro illum adipisci laborum ex accusantium sapiente officia rem.
          Cupiditate, deleniti veritatis natus ad repudiandae veniam. Modi
          inventore architecto voluptas earum culpa distinctio adipisci quod,
          sapiente soluta et aspernatur corrupti dolores consequuntur veniam,
          sint maiores unde explicabo ipsum? Dicta a, fugiat enim vitae aperiam
          cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          nobis iste facilis esse fugiat error corrupti fugit architecto
          perferendis omnis reprehenderit quas nihil, obcaecati ratione eius
          quasi beatae corporis. Commodi ut nesciunt expedita at, debitis
          laboriosam esse voluptatum, nisi recusandae amet numquam sit! Aut
          obcaecati, ullam eum neque quibusdam, fugit suscipit tenetur ea nihil
          hic debitis natus laboriosam dolore. Ut, quibusdam neque? Quo impedit
          beatae, quibusdam perspiciatis iste dicta nemo qui architecto. Quas
          modi nisi corrupti repudiandae blanditiis voluptatibus doloribus
          repellat illum rerum perferendis? Minima a aliquam dolorem deleniti
          ratione sed. Explicabo ea quam exercitationem? Dolores est molestias
          architecto harum.
        </p>
        <Link href={"/request"}>Click Here</Link>
      </main>
    </div>
  );
}
