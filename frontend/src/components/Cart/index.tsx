import React from "react";

const Cart: React.FC = () => {
  return (
    <div className="popup basket__popup js_basket">
      <div className="popup__body basket__body">
        <div className="popup__inner">
          <div className="popup__content basket__content">
            <div className="basket">
              <div className="basket__inner">
                <div className="basket__container">
                  <div className="basket__top">
                    <div className="basket__title">Ви поклали до кошика:</div>
                    <div className="popup__close">
                      <div className="popup__close-ico">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="https://www.w3.org/2000/svg">
                          <rect x="0.25" y="0.25" width="3.5" height="3.5" stroke="black" strokeWidth="0.5"></rect>
                          <rect x="4.25" y="4.25" width="3.5" height="3.5" stroke="black" strokeWidth="0.5"></rect>
                          <rect x="8.25" y="8.25" width="3.5" height="3.5" stroke="black" strokeWidth="0.5"></rect>
                          <rect x="8.25" y="0.25" width="3.5" height="3.5" stroke="black" strokeWidth="0.5"></rect>
                          <rect x="0.25" y="8.25" width="3.5" height="3.5" stroke="black" strokeWidth="0.5"></rect>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="basket__list-wrapp">
                    <div className="basket__list">
                      <div className="basket__case">
                        <div className="basket__case-body">
                          <div className="basket__image-wrapp">
                            <div className="basket__case-image">
                              <picture>
                                <source
                                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  data-srcset="./media/img/basket-2.webp" type="image/webp"/>
                                <img className="lazyload"
                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                     data-src="./media/img/basket-2.jpg"
                                     alt="img"/>
                              </picture>
                            </div>
                          </div>
                          <div className="basket__case-info">
                            <div className="basket__case-top">
                              <div className="basket__case-title">Лляна Сукня&nbsp;<br/>Pryhodko Blue синя</div>
                            </div>
                            <div className="basket__case-description">
                              <div className="basket__case-row basket__case-size">
                                <div className="basket__case-col basket__case-col-label">Розмір</div>
                                <div className="basket__case-col basket__case-col-txt"><select
                                  className="sku_prop_list">
                                  <option value="205921" data-value-id="40-42 | M" data-element="205921" selected>XS
                                    (40-42)
                                  </option>
                                  <option value="20592" data-value-id="42-44 | XS" data-element="20592">42-44 | XS
                                  </option>
                                  <option value="205934" data-value-id="44-46 | XL" data-element="205934">44-46 | XL
                                  </option>
                                  <option value="20594" data-value-id="46-48 | XXL" data-element="20594">46-48 | XXL
                                  </option>
                                </select></div>
                              </div>
                              <div className="basket__case-row basket__case-counter">
                                <div className="basket__case-col basket__case-col-label">К-сть</div>
                                <div className="basket__case-col basket__counter"><span
                                  className="minus">-</span><input className="counter" type="text" value="1"
                                                                   readOnly/><span
                                  className="plus">+</span></div>
                              </div>
                              <div className="basket__case-row basket__case-price">
                                <div className="basket__case-col basket__case-col-label">Ціна</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-summ">
                                <div className="basket__case-col basket__case-col-label">Сума</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-remove">
                                <div className="basket__case-col basket__case-col-label"></div>
                                <button className="basket__case-col basket__case-col-txt">Видалити</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basket__case">
                        <div className="basket__case-body">
                          <div className="basket__image-wrapp">
                            <div className="basket__case-image">
                              <picture>
                                <source
                                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  data-srcset="./media/img/basket-1.webp" type="image/webp"/>
                                <img className="lazyload"
                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                     data-src="./media/img/basket-1.jpg"
                                     alt="img"/>
                              </picture>
                            </div>
                          </div>
                          <div className="basket__case-info">
                            <div className="basket__case-top">
                              <div className="basket__case-title">Лляна Сукня&nbsp;<br/>Pryhodko Yellow&nbsp;<br/>жовта
                              </div>
                            </div>
                            <div className="basket__case-description">
                              <div className="basket__case-row basket__case-size">
                                <div className="basket__case-col basket__case-col-label">Розмір</div>
                                <div className="basket__case-col basket__case-col-txt"><select
                                  className="sku_prop_list">
                                  <option value="205921" data-value-id="40-42 | M" data-element="205921" selected>XS
                                    (40-42)
                                  </option>
                                  <option value="20592" data-value-id="42-44 | XS" data-element="20592">42-44 | XS
                                  </option>
                                  <option value="205934" data-value-id="44-46 | XL" data-element="205934">44-46 | XL
                                  </option>
                                  <option value="20594" data-value-id="46-48 | XXL" data-element="20594">46-48 | XXL
                                  </option>
                                </select></div>
                              </div>
                              <div className="basket__case-row basket__case-counter">
                                <div className="basket__case-col basket__case-col-label">К-сть</div>
                                <div className="basket__case-col basket__counter"><span
                                  className="minus">-</span><input className="counter" type="text" value="1"
                                                                   readOnly/><span
                                  className="plus">+</span></div>
                              </div>
                              <div className="basket__case-row basket__case-price">
                                <div className="basket__case-col basket__case-col-label">Ціна</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-summ">
                                <div className="basket__case-col basket__case-col-label">Сума</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-remove">
                                <div className="basket__case-col basket__case-col-label"></div>
                                <button className="basket__case-col basket__case-col-txt"
                                   >Видалити</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basket__case">
                        <div className="basket__case-body">
                          <div className="basket__image-wrapp">
                            <div className="basket__case-image">
                              <picture>
                                <source
                                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  data-srcset="./media/img/basket-2.webp" type="image/webp"/>
                                <img className="lazyload"
                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                     data-src="./media/img/basket-2.jpg"
                                     alt="img"/>
                              </picture>
                            </div>
                          </div>
                          <div className="basket__case-info">
                            <div className="basket__case-top">
                              <div className="basket__case-title">Лляна Сукня&nbsp;<br/>Pryhodko Blue синя</div>
                            </div>
                            <div className="basket__case-description">
                              <div className="basket__case-row basket__case-size">
                                <div className="basket__case-col basket__case-col-label">Розмір</div>
                                <div className="basket__case-col basket__case-col-txt"><select
                                  className="sku_prop_list">
                                  <option value="205921" data-value-id="40-42 | M" data-element="205921" selected>XS
                                    (40-42)
                                  </option>
                                  <option value="20592" data-value-id="42-44 | XS" data-element="20592">42-44 | XS
                                  </option>
                                  <option value="205934" data-value-id="44-46 | XL" data-element="205934">44-46 | XL
                                  </option>
                                  <option value="20594" data-value-id="46-48 | XXL" data-element="20594">46-48 | XXL
                                  </option>
                                </select></div>
                              </div>
                              <div className="basket__case-row basket__case-counter">
                                <div className="basket__case-col basket__case-col-label">К-сть</div>
                                <div className="basket__case-col basket__counter"><span
                                  className="minus">-</span><input className="counter" type="text" value="1"
                                                                   readOnly/><span
                                  className="plus">+</span></div>
                              </div>
                              <div className="basket__case-row basket__case-price">
                                <div className="basket__case-col basket__case-col-label">Ціна</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-summ">
                                <div className="basket__case-col basket__case-col-label">Сума</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-remove">
                                <div className="basket__case-col basket__case-col-label"></div>
                                <button className="basket__case-col basket__case-col-txt"
                                   >Видалити</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basket__case">
                        <div className="basket__case-body">
                          <div className="basket__image-wrapp">
                            <div className="basket__case-image">
                              <picture>
                                <source
                                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  data-srcset="./media/img/basket-1.webp" type="image/webp"/>
                                <img className="lazyload"
                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                     data-src="./media/img/basket-1.jpg"
                                     alt="img"/>
                              </picture>
                            </div>
                          </div>
                          <div className="basket__case-info">
                            <div className="basket__case-top">
                              <div className="basket__case-title">Лляна Сукня&nbsp;<br/>Pryhodko Yellow&nbsp;<br/>жовта
                              </div>
                            </div>
                            <div className="basket__case-description">
                              <div className="basket__case-row basket__case-size">
                                <div className="basket__case-col basket__case-col-label">Розмір</div>
                                <div className="basket__case-col basket__case-col-txt"><select
                                  className="sku_prop_list">
                                  <option value="205921" data-value-id="40-42 | M" data-element="205921" selected>XS
                                    (40-42)
                                  </option>
                                  <option value="20592" data-value-id="42-44 | XS" data-element="20592">42-44 | XS
                                  </option>
                                  <option value="205934" data-value-id="44-46 | XL" data-element="205934">44-46 | XL
                                  </option>
                                  <option value="20594" data-value-id="46-48 | XXL" data-element="20594">46-48 | XXL
                                  </option>
                                </select></div>
                              </div>
                              <div className="basket__case-row basket__case-counter">
                                <div className="basket__case-col basket__case-col-label">К-сть</div>
                                <div className="basket__case-col basket__counter"><span
                                  className="minus">-</span><input className="counter" type="text" value="1"
                                                                   readOnly/><span
                                  className="plus">+</span></div>
                              </div>
                              <div className="basket__case-row basket__case-price">
                                <div className="basket__case-col basket__case-col-label">Ціна</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-summ">
                                <div className="basket__case-col basket__case-col-label">Сума</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-remove">
                                <div className="basket__case-col basket__case-col-label"></div>
                                <button className="basket__case-col basket__case-col-txt"
                                   >Видалити</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basket__case">
                        <div className="basket__case-body">
                          <div className="basket__image-wrapp">
                            <div className="basket__case-image">
                              <picture>
                                <source
                                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  data-srcset="./media/img/basket-2.webp" type="image/webp"/>
                                <img className="lazyload"
                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                     data-src="./media/img/basket-2.jpg"
                                     alt="img"/>
                              </picture>
                            </div>
                          </div>
                          <div className="basket__case-info">
                            <div className="basket__case-top">
                              <div className="basket__case-title">Лляна Сукня&nbsp;<br/>Pryhodko Blue синя</div>
                            </div>
                            <div className="basket__case-description">
                              <div className="basket__case-row basket__case-size">
                                <div className="basket__case-col basket__case-col-label">Розмір</div>
                                <div className="basket__case-col basket__case-col-txt"><select
                                  className="sku_prop_list">
                                  <option value="205921" data-value-id="40-42 | M" data-element="205921" selected>XS
                                    (40-42)
                                  </option>
                                  <option value="20592" data-value-id="42-44 | XS" data-element="20592">42-44 | XS
                                  </option>
                                  <option value="205934" data-value-id="44-46 | XL" data-element="205934">44-46 | XL
                                  </option>
                                  <option value="20594" data-value-id="46-48 | XXL" data-element="20594">46-48 | XXL
                                  </option>
                                </select></div>
                              </div>
                              <div className="basket__case-row basket__case-counter">
                                <div className="basket__case-col basket__case-col-label">К-сть</div>
                                <div className="basket__case-col basket__counter"><span
                                  className="minus">-</span><input className="counter" type="text" value="1"
                                                                   readOnly/><span
                                  className="plus">+</span></div>
                              </div>
                              <div className="basket__case-row basket__case-price">
                                <div className="basket__case-col basket__case-col-label">Ціна</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-summ">
                                <div className="basket__case-col basket__case-col-label">Сума</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-remove">
                                <div className="basket__case-col basket__case-col-label"></div>
                                <button className="basket__case-col basket__case-col-txt"
                                   >Видалити</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basket__case">
                        <div className="basket__case-body">
                          <div className="basket__image-wrapp">
                            <div className="basket__case-image">
                              <picture>
                                <source
                                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  data-srcset="./media/img/basket-1.webp" type="image/webp"/>
                                <img className="lazyload"
                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                     data-src="./media/img/basket-1.jpg"
                                     alt="img"/>
                              </picture>
                            </div>
                          </div>
                          <div className="basket__case-info">
                            <div className="basket__case-top">
                              <div className="basket__case-title">Лляна Сукня&nbsp;<br/>Pryhodko Yellow&nbsp;<br/>жовта
                              </div>
                            </div>
                            <div className="basket__case-description">
                              <div className="basket__case-row basket__case-size">
                                <div className="basket__case-col basket__case-col-label">Розмір</div>
                                <div className="basket__case-col basket__case-col-txt"><select
                                  className="sku_prop_list">
                                  <option value="205921" data-value-id="40-42 | M" data-element="205921" selected>XS
                                    (40-42)
                                  </option>
                                  <option value="20592" data-value-id="42-44 | XS" data-element="20592">42-44 | XS
                                  </option>
                                  <option value="205934" data-value-id="44-46 | XL" data-element="205934">44-46 | XL
                                  </option>
                                  <option value="20594" data-value-id="46-48 | XXL" data-element="20594">46-48 | XXL
                                  </option>
                                </select></div>
                              </div>
                              <div className="basket__case-row basket__case-counter">
                                <div className="basket__case-col basket__case-col-label">К-сть</div>
                                <div className="basket__case-col basket__counter"><span
                                  className="minus">-</span><input className="counter" type="text" value="1"
                                                                   readOnly/><span
                                  className="plus">+</span></div>
                              </div>
                              <div className="basket__case-row basket__case-price">
                                <div className="basket__case-col basket__case-col-label">Ціна</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-summ">
                                <div className="basket__case-col basket__case-col-label">Сума</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-remove">
                                <div className="basket__case-col basket__case-col-label"></div>
                                <button className="basket__case-col basket__case-col-txt"
                                   >Видалити</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basket__case">
                        <div className="basket__case-body">
                          <div className="basket__image-wrapp">
                            <div className="basket__case-image">
                              <picture>
                                <source
                                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  data-srcset="./media/img/basket-2.webp" type="image/webp"/>
                                <img className="lazyload"
                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                     data-src="./media/img/basket-2.jpg"
                                     alt="img"/>
                              </picture>
                            </div>
                          </div>
                          <div className="basket__case-info">
                            <div className="basket__case-top">
                              <div className="basket__case-title">Лляна Сукня&nbsp;<br/>Pryhodko Blue синя</div>
                            </div>
                            <div className="basket__case-description">
                              <div className="basket__case-row basket__case-size">
                                <div className="basket__case-col basket__case-col-label">Розмір</div>
                                <div className="basket__case-col basket__case-col-txt"><select
                                  className="sku_prop_list">
                                  <option value="205921" data-value-id="40-42 | M" data-element="205921" selected>XS
                                    (40-42)
                                  </option>
                                  <option value="20592" data-value-id="42-44 | XS" data-element="20592">42-44 | XS
                                  </option>
                                  <option value="205934" data-value-id="44-46 | XL" data-element="205934">44-46 | XL
                                  </option>
                                  <option value="20594" data-value-id="46-48 | XXL" data-element="20594">46-48 | XXL
                                  </option>
                                </select></div>
                              </div>
                              <div className="basket__case-row basket__case-counter">
                                <div className="basket__case-col basket__case-col-label">К-сть</div>
                                <div className="basket__case-col basket__counter"><span
                                  className="minus">-</span><input className="counter" type="text" value="1"
                                                                   readOnly/><span
                                  className="plus">+</span></div>
                              </div>
                              <div className="basket__case-row basket__case-price">
                                <div className="basket__case-col basket__case-col-label">Ціна</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-summ">
                                <div className="basket__case-col basket__case-col-label">Сума</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-remove">
                                <div className="basket__case-col basket__case-col-label"></div>
                                <button className="basket__case-col basket__case-col-txt"
                                   >Видалити</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basket__case">
                        <div className="basket__case-body">
                          <div className="basket__image-wrapp">
                            <div className="basket__case-image">
                              <picture>
                                <source
                                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  data-srcset="./media/img/basket-1.webp" type="image/webp"/>
                                <img className="lazyload"
                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                     data-src="./media/img/basket-1.jpg"
                                     alt="img"/>
                              </picture>
                            </div>
                          </div>
                          <div className="basket__case-info">
                            <div className="basket__case-top">
                              <div className="basket__case-title">Лляна Сукня&nbsp;<br/>Pryhodko Yellow&nbsp;<br/>жовта
                              </div>
                            </div>
                            <div className="basket__case-description">
                              <div className="basket__case-row basket__case-size">
                                <div className="basket__case-col basket__case-col-label">Розмір</div>
                                <div className="basket__case-col basket__case-col-txt"><select
                                  className="sku_prop_list">
                                  <option value="205921" data-value-id="40-42 | M" data-element="205921" selected>XS
                                    (40-42)
                                  </option>
                                  <option value="20592" data-value-id="42-44 | XS" data-element="20592">42-44 | XS
                                  </option>
                                  <option value="205934" data-value-id="44-46 | XL" data-element="205934">44-46 | XL
                                  </option>
                                  <option value="20594" data-value-id="46-48 | XXL" data-element="20594">46-48 | XXL
                                  </option>
                                </select></div>
                              </div>
                              <div className="basket__case-row basket__case-counter">
                                <div className="basket__case-col basket__case-col-label">К-сть</div>
                                <div className="basket__case-col basket__counter"><span
                                  className="minus">-</span><input className="counter" type="text" value="1"
                                                                   readOnly/><span
                                  className="plus">+</span></div>
                              </div>
                              <div className="basket__case-row basket__case-price">
                                <div className="basket__case-col basket__case-col-label">Ціна</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-summ">
                                <div className="basket__case-col basket__case-col-label">Сума</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-remove">
                                <div className="basket__case-col basket__case-col-label"></div>
                                <button className="basket__case-col basket__case-col-txt"
                                   >Видалити</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basket__case">
                        <div className="basket__case-body">
                          <div className="basket__image-wrapp">
                            <div className="basket__case-image">
                              <picture>
                                <source
                                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  data-srcset="./media/img/basket-2.webp" type="image/webp"/>
                                <img className="lazyload"
                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                     data-src="./media/img/basket-2.jpg"
                                     alt="img"/>
                              </picture>
                            </div>
                          </div>
                          <div className="basket__case-info">
                            <div className="basket__case-top">
                              <div className="basket__case-title">Лляна Сукня&nbsp;<br/>Pryhodko Blue синя</div>
                            </div>
                            <div className="basket__case-description">
                              <div className="basket__case-row basket__case-size">
                                <div className="basket__case-col basket__case-col-label">Розмір</div>
                                <div className="basket__case-col basket__case-col-txt"><select
                                  className="sku_prop_list">
                                  <option value="205921" data-value-id="40-42 | M" data-element="205921" selected>XS
                                    (40-42)
                                  </option>
                                  <option value="20592" data-value-id="42-44 | XS" data-element="20592">42-44 | XS
                                  </option>
                                  <option value="205934" data-value-id="44-46 | XL" data-element="205934">44-46 | XL
                                  </option>
                                  <option value="20594" data-value-id="46-48 | XXL" data-element="20594">46-48 | XXL
                                  </option>
                                </select></div>
                              </div>
                              <div className="basket__case-row basket__case-counter">
                                <div className="basket__case-col basket__case-col-label">К-сть</div>
                                <div className="basket__case-col basket__counter"><span
                                  className="minus">-</span><input className="counter" type="text" value="1"
                                                                   readOnly/><span
                                  className="plus">+</span></div>
                              </div>
                              <div className="basket__case-row basket__case-price">
                                <div className="basket__case-col basket__case-col-label">Ціна</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-summ">
                                <div className="basket__case-col basket__case-col-label">Сума</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-remove">
                                <div className="basket__case-col basket__case-col-label"></div>
                                <button className="basket__case-col basket__case-col-txt"
                                   >Видалити</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basket__case">
                        <div className="basket__case-body">
                          <div className="basket__image-wrapp">
                            <div className="basket__case-image">
                              <picture>
                                <source
                                  srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  data-srcset="./media/img/basket-1.webp" type="image/webp"/>
                                <img className="lazyload"
                                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                     data-src="./media/img/basket-1.jpg"
                                     alt="img"/>
                              </picture>
                            </div>
                          </div>
                          <div className="basket__case-info">
                            <div className="basket__case-top">
                              <div className="basket__case-title">Лляна Сукня&nbsp;<br/>Pryhodko Yellow&nbsp;<br/>жовта
                              </div>
                            </div>
                            <div className="basket__case-description">
                              <div className="basket__case-row basket__case-size">
                                <div className="basket__case-col basket__case-col-label">Розмір</div>
                                <div className="basket__case-col basket__case-col-txt"><select
                                  className="sku_prop_list">
                                  <option value="205921" data-value-id="40-42 | M" data-element="205921" selected>XS
                                    (40-42)
                                  </option>
                                  <option value="20592" data-value-id="42-44 | XS" data-element="20592">42-44 | XS
                                  </option>
                                  <option value="205934" data-value-id="44-46 | XL" data-element="205934">44-46 | XL
                                  </option>
                                  <option value="20594" data-value-id="46-48 | XXL" data-element="20594">46-48 | XXL
                                  </option>
                                </select></div>
                              </div>
                              <div className="basket__case-row basket__case-counter">
                                <div className="basket__case-col basket__case-col-label">К-сть</div>
                                <div className="basket__case-col basket__counter"><span
                                  className="minus">-</span><input className="counter" type="text" value="1"
                                                                   readOnly/><span
                                  className="plus">+</span></div>
                              </div>
                              <div className="basket__case-row basket__case-price">
                                <div className="basket__case-col basket__case-col-label">Ціна</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-summ">
                                <div className="basket__case-col basket__case-col-label">Сума</div>
                                <div className="basket__case-col basket__case-col-txt"><span className="js_price"
                                                                                             data-price="5200">5200</span><span
                                  className="currency-ico">грн</span></div>
                              </div>
                              <div className="basket__case-row basket__case-remove">
                                <div className="basket__case-col basket__case-col-label"></div>
                                <button className="basket__case-col basket__case-col-txt"
                                   >Видалити</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basket__actions">
                    <div className="basket__prod-wrapp">
                      <div className="basket__prod-title">Загальна вартість: 15600 грн</div>
                    </div>
                    <div className="basket__buttons">
                      <button className="basket__btn btn__dark">перейти
                      до кошика</button>
                      <button className="basket__btn btn__light js_close-popup">Продовжити
                      покупки</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cart;