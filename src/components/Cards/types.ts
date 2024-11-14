import {Arabe, CafeComLeite, Capuccino, ChocolateQuente, Cubano, ExpressoAmericano, ExpressoCremoso, ExpressoGelato, ExpressoTradicional, Havaiano, Irlandes, Latte, Macchiato, Mochaccino} from "./images";


export const cardInfos = [
  {title: "Expresso Tradicional", description: "O tradicional cafe feito com água quente e grão moído", image: ExpressoTradicional, tags: ["Tradicional"]},
  {title: "Expresso Americano", description: "Expresso diluído, menos intenso que o tradicional", image: ExpressoAmericano, tags: ["Tradicional"]},
  {title: "Expresso Cremoso", description: "Cafe expresso tradicional com espuma cremosa", image: ExpressoCremoso, tags: ["Tradicional"]},
  {title: "Expresso Gelado", description: "Bebida preparada com cafe expresso e cubos de gelo", image: ExpressoGelato, tags: ["Tradicional", "Gelado"]},
  {title: "Café com Leite", description: "Meio a meio de expresso tradicional com leite vaporizado", image: CafeComLeite, tags: ["Tradicional", "Com Leite"]},
  {title: "Latte", description: "Uma dose de cafe expresso com o dobro de leite e espuma cremosa", image: Latte, tags: ["Tradicional", "Com Leite"]},
  {title: "Capuccino", description: "Bebida com canela feita de doses iguais de cafe expresso e um pouco de leite", image: Capuccino, tags: ["Tradicional", "Com Leite"]},
  {title: "Macchiato", description: "Cafe expresso misturado com um pouco de leite quente e espuma", image: Macchiato, tags: ["Tradicional", "Com Leite"]},
  {title: "Mocaccino", description: "Cafe expresso com calda de chocolate, pouco leite e espuma", image: Mochaccino, tags: ["Tradicional", "Com Leite"]},
  {title: "Chocolate Quente", description: "Bebida feita com chocolate dissolvido no leite quente e cafe", image: ChocolateQuente, tags: ["Especial", "Com Leite"]},
  {title: "Cubano", description: "Drink gelado de cafe expresso com rum, creme de leite e hortela", image: Cubano, tags: ["Especial", "Alcóolico", "Gelado"]},
  {title: "Havaiano", description: "Bebida adocicada preparada com cafe e leite de coco", image: Havaiano, tags: ["Especial"]},
  {title: "Árabe", description: "Bebida preparada com graos de cafe árabe e especiarias", image: Arabe, tags: ["Especial"]},
  {title: "Irlandês", description: "Bebida a base de café, uísque irlandês, açúcar e chantilly", image: Irlandes, tags: ["Especial", "Alcóolico"]},
];