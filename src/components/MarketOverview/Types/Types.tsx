import css from './Types.module.scss'

export function Types({ name, description }) {
    return (
        <div className={css.wrapper}>
            <div className={css.circle} />
            <div className={css.content}>
                <span>{name}</span>
                <span>{description}</span>
            </div>

        </div>
    )
}