import AdminHeader from "@/components/AdminHeader";

export default function layoutLearning({children}){
    return(
        <div>
            <h1>Layout Learning</h1>
            <AdminHeader/>
            {children}
        </div>
    )
}