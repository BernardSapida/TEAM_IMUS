type TPosition = 'Kapitan' | 'Kagawad' | 'SK' | 'NGO' | 'Senior' | 'PWD' | 'HOA' | 'SPTA' | 'TODA' | 'Coop' | 'Youth' | 'BHW' | 'Day Care' | 'LGBTQ'
type TPerson = {
    name: string;
    contact_number: string;
    address: string;
    sex: 'male' | 'female';
    age: number;
    position: TCandidatePosition
}