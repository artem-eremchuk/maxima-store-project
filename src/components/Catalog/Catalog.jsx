import styles from './Catalog.module.scss';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { api } from '../../api/api';
import ProductCard from '../ProductCard/ProductCard';
import ProductsFilter from '../ProductsFilter/ProductsFilter';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';

function Catalog() {
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ cardsPerPage ] = useState(12);
  const [ totalCards, setTotalCards ] = useState(0);
  const [ category, setCategory ] = useState('all');
  
  const catalogRef = React.createRef();
  
  const handleCatalogRef = () =>
  catalogRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  useEffect(() => setCurrentPage(0), [category]);

  const getProducts = async (page, size, category) => {
    let products;
    
    if(category === 'all'){
      products = await api.getProducts(page, size);
      setTotalCards(products.data.totalElements);
    } else {
      products = await api.getCategory(page, size, category);
      setTotalCards(products.data.totalElements);
    }
    
    return products.data.content;
  }
  
  const { 
    data, 
    isLoading
  } = useQuery(
    ['products', currentPage, category], 
    ({ queryKey }) => getProducts(queryKey[1], cardsPerPage, queryKey[2])
  );

  return (
    <div 
      className={styles.catalog__wrapper} 
      ref={catalogRef}
    >
      <div className='container'>
        <div className={styles.catalog}>
          <h3 className={styles.catalog__header}>Каталог</h3>
        </div>
        <ProductsFilter 
          catalogFilter={setCategory}
          category={category}
        />
        <div className={styles.catalog__list}>
          {isLoading 
            ? <Spinner /> 
            : data.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                />
              )
          )}
        </div>
        <Pagination 
          cardsPerPage={cardsPerPage} 
          totalCards={totalCards} 
          paginate={setCurrentPage}
          handleCatalogRef={handleCatalogRef}
        />
      </div>
    </div>
  )
}

export default Catalog;