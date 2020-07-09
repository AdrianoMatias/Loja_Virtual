import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <td>
            <img src="https://static.netshoes.com.br/produtos/tenis-adidas-easy-vulc-20-masculino/72/NQQ-0133-172/NQQ-0133-172_zoom1.jpg?ts=1579544093&ims=326x"
             alt=""
             />
          </td>
          <td>
            <strong>Tênis muito massa</strong>
            <span>129,90</span>
          </td>
          <td>
            <button type="button">
              <MdRemoveCircleOutline size={20} color="#7159c1" />
            </button>
            <input type="number" readOnly value={2} />
            <button type="button">
              <MdAddCircleOutline size={20} color="#7159c1" />
            </button>
          </td>
          <td>
            <strong>R$258,80</strong>
          </td>
          <td>
            <button type="button">
              <MdDelete size={20} color="#7159c1" />
            </button>
          </td>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
