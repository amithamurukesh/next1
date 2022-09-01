import Link from "next/link";
export default function Button (props) {
    return (
      
          <div
            className=" flex items-center justify-center border-2 p-3 w-80 m-8  border-violet text-violet-400 rounded-full  font-semibold hover:bg-violet-500 hover:text-violet-300 text-center"
           >
              <Link href="/pages/Newpage/Create">
            {props.label}
            </Link>
             </div>
          
        
    );
  }
  