import AnimatedCounter from "../../components/AnimatedNumber.jsx";
import { stats } from "../../data.jsx";

const Stats = () => {
  return (
    <>
      {stats.map(({ id, no, title }) => {
        return (
          // <div className="stats__box" key={id}>
          //   <h3 className="stats__no">{no}</h3>
          //   <p className="stats__title">{title}</p>
          // </div>

          <AnimatedCounter key={id} no={no} title={title} />
        );
      })}
    </>
  );
};

export default Stats;
