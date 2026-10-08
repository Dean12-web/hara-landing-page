import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { initialDraft, pricingPlans, servicesData } from "../data/haraData";

export default function Brief(){
    const [searchParams] = useSearchParams
    const formRef = useRef;

    const [step,setStep] = useState(1);
    const [errorMsg, setErrorMsg] = useState("");
    const [submittedBrief, setSubmittedBrief] = useState(null);

    const [draft, setDraft] = useState(() => {
        try {
            const saved = sessionStorage.getItem('hara-draft-v1');
            return saved ? { ...initialDraft, ...JSON.parse(saved)} : initialDraft; 
        } catch  {
            return initialDraft;
        }
    });

    // Baca query param dari URL
    useEffect(() => {
        if(searchParams.get("new") === 1){
            setDraft(initialDraft);
            sessionStorage.removeItem('hara-draft-v1');
            return;
        }

        const qService = searchParams.get("service");
        const qPlan = searchParams.get("plan");

        if(qService && servicesData.some((s) => s.id === qService)){
            setDraft((prev) => ({
                ...prev,
                service: qService,
                plan:qPlan && pricingPlans.some((p) => p.id === qPlan)? qPlan : prev.plan
            }));
        }
    }, [searchParams]);

    // Simpan draft ke sessionStorage setiap ada perubahan
    useEffect(() => {
        try{
            sessionStorage.setItem("hara-draft-v1", JSON.stringify(draft));
        }catch(e){
            console.error("Gagal menyimpan draft ke sessionStorage", e);
        }
    }, [draft]);

    // Handle perubahan input
    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setDraft((prev) =>({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        setErrorMsg("");
    }

    // Helper data layanan & paket yang dipilih
    const currentService = servicesData.find((s) => s.id === draft.service) || servicesData[0];
    const currentPlan = draft.service === "social-media-management" ? pricingPlans.find((p) => p.id === draft.plan) || pricingPlans[0] : null;

    // Estimasi harga
    const estimatedPrice = currentPlan ? currentPlan.price : currentService.price;

    const estimatedPeriod = currentService.unit ? currentService.unit.replace("/ ","") : "project";

    // Scroll to form atas
    const scrollToForm = () => {
        if(formRef.current){
            formRef.current.scrollIntoView({behavior: "smooth", block:"start"});
        }
    };

    // Validasi Step 1
    const handleNextStep1 = (e) => {
        e.preventDefault();
        if(!draft.service){
            setErrorMsg("Pilih salah satu layanan utama.");
            return;
        }
        if(!draft.budget){
            setErrorMsg("Pilih kisaran anggaran Anda.");
            return;
        }
        if(!draft.timeline){
            setErrorMsg("Pilih target waktu mulai.");
            return;
        }
        setErrorMsg("");
        setStep(2);
        scrollToForm();
    }

    // Validasi Step 2
    const handleNextStep2 = (e) => {
        e.preventDefault();
        if(
            !draft.name.trim() ||
            !draft.company.trim() || 
            !draft.email.trim() ||
            !draft.phone.trim()
        ){
            setErrorMsg("Lengkapi semua informasi kontak bertanda bintang (*).");
            return;
        }
        if(draft.description.trim().length < 20){
            setErrorMsg("Ceritakan kebutuhan project minimal 20 karakter.");
            return;
        }
        setErrorMsg("");
        setStep(3);
        scrollToForm();
    }

    const handleSubmitBrief = (e) => {
        e.preventDefault();
        if(!draft.consent){
            setErrorMsg("Harap setujui pernyataan penyimpanan data lokal.");
            return;

            const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g,"");
            const randomHex = Math.random().toString(36).substring(2,6).toUpperCase();
        }
    }
    
    return(
        <>
        </>
    )
}