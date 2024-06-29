import css from './Description.module.scss'

interface DescriptionProps {
    title: string,
    description?: 'Low' | 'High'
}

export function Description({ title, description }: DescriptionProps) {
    return (
        <div className={css.description}>
            <span>{title}</span>
            {description && <span className={css[description]}>{description}</span>}
        </div>)
}