import Image from 'next/image';
import css from './Info.module.scss';

interface InfoProps {
  title: string;
  amount: number;
  apr: number;
  question?: boolean;
}

export function Info({ title, amount, apr, question = false }: InfoProps) {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        <span>{title}</span>
        {question && (
          <Image src={'/question.png'} width={17} height={18} alt="question" />
        )}
      </div>
      <div className={css.result}>
        <span className={css.amount}>{!question && '$'}{amount}{question && '%'}</span>
        <span className={css.apr}>APR: {apr}%</span>
      </div>
    </div>
  );
}
