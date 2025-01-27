type TPosition = 'KAPITAN' | 'KAGAWAD' | 'SK KAGAWAD'| 'SK CHAIRMAN' | 'NGO' | 'SENIOR' | 'PWD' | 'HOA' | 'SPTA' | 'TODA' | 'COOP' | 'YOUTH' | 'BHW' | 'DAY CARE' | 'LGBTQ'
type TCandidate = {
    id?: string;
    firstname: string;
    middlename: string;
    lastname: string;
    barangay: string;
    address: string;
    contact: string;
    position: TCandidatePosition
}