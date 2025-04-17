// create a type where key is from AllKeys's type and value is string
type AllKeys="userId"|"role"|"email"|"phone"|"dob"
 
type AllWithString= Record<AllKeys, string>
/**
{
    userId: string;
    role: string;
    email: string;
    phone: string;
    dob: string;
}
*/