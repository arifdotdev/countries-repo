export interface UserProps {
    name: string;
    job: string
}

export function User({ name, job }: UserProps) {
    
    return (
        <>
            <h2>{name}</h2>
            <p>{job}</p>
        </>
    )
}