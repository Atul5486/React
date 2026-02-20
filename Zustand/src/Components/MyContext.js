import { create } from "zustand";

const context=create((set,get)=>{
    return{
        count:1,
        name:"andrew",
        incerement:()=>{
          set((state)=>({
            count:state.count+1
          }))
        },
        capitalizeName:()=>{
            const {name}=get();
                set(()=>({
                    name:name.charAt(0).toUpperCase()+name.slice(1)
                }))
        }
    }
});

export default context;