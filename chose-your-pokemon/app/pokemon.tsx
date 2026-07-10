import Link from "next/link";
import Image from "next/image";

export default function Pokemon(props){
    return(
        <div key={props.index}>
            <Link href={"pokemon/" + props.entry.name}>
                <div>
                    <h2>{props.entry.name}</h2>
                    <p>#{props.index +1}</p>
                    </div>
                </Link>
            </div>
    );
}