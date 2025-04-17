// same as previous question but all key's should be in uppercase
type Eventss="log_in"|"log_out"|"sign_up";
 
type AllEvents= Record<Uppercase<Eventss>, string>
/**
{
    LOG_IN: string;
    LOG_OUT: string;
    SIGN_UP: string;
}
*/