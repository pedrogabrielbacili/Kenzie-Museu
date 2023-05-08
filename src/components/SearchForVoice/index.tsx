
import { useEffect, useState } from "react";

let recognition:any=null

if("webkitSpeechRecognition" in window){
    recognition = new webkitSpeechRecognition()
    recognition.continuous=true
}

const SearchForVoice=()=>{
    const [text, setText]=useState("");
    const [isListening, setIsListening]=useState(false);

    useEffect(()=>{
        if(!recognition)return;

        recognition.onresult=(event:SpeechRecognitionEvent)=>{
            
            setText(event.results[0][0].transcript)
            recognition.stop();          
            setIsListening(false);
        };
    }, [])

    const startListening=()=>{
        setText("");
        setIsListening(true);
        recognition.start();
    }

    return{
        text, 
        isListening,
        startListening, 
        setText,
        hasRecognitionSupport: !!recognition,
    }
};
export default SearchForVoice;