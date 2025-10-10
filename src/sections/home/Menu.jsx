import Logo from '../../assets/logoicon.svg'
import Breakfast1 from '../../assets/menu-1.jpg'
import Breakfast2 from '../../assets/menu-2.jpg'
import Breakfast3 from '../../assets/menu-3.jpg'
import Dinner1 from '../../assets/menu-4.jpg'
import Dinner2 from '../../assets/menu-5.jpg'
import Lunch1 from '../../assets/menu-6.jpg'
import Lunch2 from '../../assets/menu-7.jpg'
import ColdDrinks1 from '../../assets/menu-8.jpg'
import ColdDrinks2 from '../../assets/menu-9.jpg'
import ColdDrinks3 from '../../assets/menu-10.jpg'

function Menu() {

  const menuItems = [
    {
      category: 'Breakfast', items: [
        { imgUrl: Breakfast1, name: 'Delicious Pancakes', discription: 'Lorem ipsum dolor sit amet, exand to consectetur', ogprice: '$8.00', price: '$5.00' },
        { imgUrl: Breakfast2, name: 'Nan Roti & Vegetables', discription: 'Lorem ipsum dolor sit amet, exand to consectetur', ogprice: '$8.00', price: '$5.00' },
        { imgUrl: Breakfast3, name: 'Tea & Coffee', discription: 'Lorem ipsum dolor sit amet, exand to consectetur', ogprice: '$8.00', price: '$5.00' },
      ]
    },
    {
      category: 'Cool Drinks', items: [
        { imgUrl: ColdDrinks1, name: 'Misti Doi Sweet Yogurt', discription: 'Lorem ipsum dolor sit amet, exand to consectetur', ogprice: '$8.00', price: '$5.00' },
        { imgUrl: ColdDrinks2, name: 'Soft Drinks', discription: 'Lorem ipsum dolor sit amet, exand to consectetur', ogprice: '$8.00', price: '$5.00' },
        { imgUrl: ColdDrinks3, name: 'Sweet Lassi', discription: 'Lorem ipsum dolor sit amet, exand to consectetur', ogprice: '$8.00', price: '$5.00' },
      ]
    },
    {
      category: 'Lunch', items: [
        { imgUrl: Lunch1, name: 'Kachchi Biryani', discription: 'Lorem ipsum dolor sit amet, exand to consectetur', ogprice: '$8.00', price: '$5.00' },
        { imgUrl: Lunch2, name: 'Morog Polao', discription: 'Lorem ipsum dolor sit amet, exand to consectetur', ogprice: '$8.00', price: '$5.00' },
      ]
    },
    {
      category: 'Dinner', items: [
        { imgUrl: Dinner1, name: 'Grilled Chicken', discription: 'Lorem ipsum dolor sit amet, exand to consectetur', ogprice: '$8.00', price: '$5.00' },
        { imgUrl: Dinner2, name: 'Fast food', discription: 'Lorem ipsum dolor sit amet, exand to consectetur', ogprice: '$8.00', price: '$5.00' },
      ]
    },
  ]

  return (
    <section className='menu-main pb-10 bg-[url(/menu-pattern.png)] bg-center bg-cover'>
      <div className='menu-content-main max-w-7xl mx-auto px-2'>
        <div className='text-center pt-28 flex items-center flex-col' data-aos='fade-in'>
          {/* -----------Menu-Main-Heading---------- */}
          <img src={Logo} alt="Logo" />
          <h1 className="menu-heading text-3xl xl:text-5xl font-bold my-6 text-[var(--text-light)]">Our Special Menus</h1>
          <h4 className="menu-sub-heading max-w-2xl mb-10">Proin at lorem justo. Sed maximus risus hendrerit ipsum sodales, vel consequat dui ultrices. Vestibulum ante ipsum primis in faucibus orci luctus.</h4>
        </div>
        <div
          className="menu grid grid-rows-1 grid-cols-1 lg:grid-cols-2 bg-[var(--color-dark)] p-6 bg-[url(/noise.png)] bg-center rounded-4xl border-[10px] lg:border-[15px] border-[#333]"
          data-aos='fade-in' data-aos-delay='100'
        >
          {menuItems.map((category, i) => (
            // {/* -----------Menu-Cate---------- */}
            <div className='menu-category' key={i}>
              <h4 className='menu-category-heading font-pacifico my-5 text-2xl text-[var(--text-light)]'>{category.category}</h4>
              {/* -----------Menu-Main-Heading----------*/}
              {category.items.map((menu, j) => (
                <div className='menu-items flex flex-col md:flex-row items-start md:items-center justify-center md:space-y-10 space-y-4 border-b border-dashed border-[#ffffff40] mb-5 mx-0 md:mx-5' key={j}>
                  <img src={menu.imgUrl} alt={menu.name} loading='lazy' className='max-w-[90px] rounded-xl mt-3 md:mt-0 md:mx-4' />
                  <div className='menu-item-details'>
                    <h4 className='text-[var(--text-light)] text-lg font-bold'>{menu.name}</h4>
                    <p className='max-w-[260px] text-sm'>{menu.discription}</p>
                  </div>
                  <div className='menu-item-pricing'>
                    <p className='text-[var(--text-light)] text-lg'>{menu.price}</p>
                    <p className='line-through'>{menu.ogprice}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
