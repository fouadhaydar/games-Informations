import { Card } from "./Card"

export function Scroller ({arry}) {
    return (
        <div className="relative z-10 w-full h-full pt-3 pb-20 overflow-x-scroll scroll whitespace-nowrap scroll-smooth" id="scroller">
            {arry.map((item)=>{
                return (
                    <Card 
                        key={item.id}
                        thumbnail={item.thumbnail} 
                        title={item.title}
                        shortDescription={item.short_description}
                        id={item.id} />
                )
            })}
        </div>
    )
}