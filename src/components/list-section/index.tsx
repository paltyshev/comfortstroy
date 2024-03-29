import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/remont.svg';

const listItems = [
  {
    title: `Цена`,
    description: `Не меняется на протяжении всего ремонта квартиры, т.к. у нас нет дополнительных или скрытых расходов. К тому же, общая сумма отделки закреплена в договоре.`,
  },
  {
    title: `Специалисты`,
    description: `На каждом объекте у нас работают от 15 узконаправленных специалистов.`,
  },
  {
    title: `Гарантия`,
    description: `12 месяцев согласно СНиП и ГОСТ`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-yellow-600 font-semibold tracking-wide uppercase`)}>Мы доверяем клиентам</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Сделайте вашу жизнь комфортнее</p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-yellow-50 text-yellow-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`pr-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
