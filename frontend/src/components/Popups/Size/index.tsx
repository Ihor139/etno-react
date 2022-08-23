import React from 'react'
import { Link } from 'react-router-dom'

const Size: React.FC = () => {
  return (
    <div className="popup size__popup js-size-popup">
      <div className="popup__body">
        <div className="popup__inner">
          <div className="popup__top">
            <div className="popup__close">
              <div className="popup__close-ico">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.25"
                    y="0.25"
                    width="3.5"
                    height="3.5"
                    stroke="black"
                    strokeWidth="0.5"
                  ></rect>
                  <rect
                    x="4.25"
                    y="4.25"
                    width="3.5"
                    height="3.5"
                    stroke="black"
                    strokeWidth="0.5"
                  ></rect>
                  <rect
                    x="8.25"
                    y="8.25"
                    width="3.5"
                    height="3.5"
                    stroke="black"
                    strokeWidth="0.5"
                  ></rect>
                  <rect
                    x="8.25"
                    y="0.25"
                    width="3.5"
                    height="3.5"
                    stroke="black"
                    strokeWidth="0.5"
                  ></rect>
                  <rect
                    x="0.25"
                    y="8.25"
                    width="3.5"
                    height="3.5"
                    stroke="black"
                    strokeWidth="0.5"
                  ></rect>
                </svg>
              </div>
            </div>
          </div>
          <div className="popup__content size__contant">
            <div className="size__tabs tabs-block">
              <div className="size__tab-panel">
                <Link
                  className="size__tab-btn active"
                 to="#"
                  data-tab="men"
                >
                  Чоловіки
                </Link>
                <Link
                  className="size__tab-btn"
                 to="#"
                  data-tab="women"
                >
                  Жінки
                </Link>
                <Link
                  className="size__tab-btn"
                 to="#"
                  data-tab="children"
                >
                  Діти
                </Link>
              </div>
              <div className="size__tab-container">
                <div
                  className="size__tab-content active"
                  data-tab-content="men"
                >
                  <table className="size-table center">
                    <tbody>
                      <tr>
                        <td>
                          &Rcy;&ocy;&zcy;&mcy;&iukcy;&rcy;
                          &mcy;&iukcy;&zhcy;&ncy;&acy;&rcy;&ocy;&dcy;&ncy;&icy;&jcy;
                        </td>
                        <td>XS</td>
                        <td>S</td>
                        <td>M</td>
                        <td>L</td>
                        <td>XL</td>
                        <td>XXL</td>
                        <td>XXXL</td>
                      </tr>
                      <tr>
                        <td>
                          &Rcy;&ocy;&zcy;&mcy;&iukcy;&rcy;
                          &ucy;&kcy;&rcy;&acy;&yicy;&ncy;&scy;&kcy;&icy;&jcy;
                        </td>
                        <td>42-44</td>
                        <td>44-46</td>
                        <td>46-48</td>
                        <td>48-50</td>
                        <td>50-52</td>
                        <td>52-54</td>
                        <td>54-56</td>
                      </tr>
                      <tr>
                        <td>
                          &Rcy;&ocy;&zcy;&mcy;&iukcy;&rcy;
                          &kcy;&ocy;&mcy;&iukcy;&rcy;&ucy;
                        </td>
                        <td>38</td>
                        <td>39</td>
                        <td>40-41</td>
                        <td>42</td>
                        <td>43</td>
                        <td>44</td>
                        <td>45</td>
                      </tr>
                      <tr>
                        <td>
                          &Ocy;&bcy;&apos;&jukcy;&mcy;
                          &gcy;&rcy;&ucy;&dcy;&iecy;&jcy;
                        </td>
                        <td>92</td>
                        <td>94-98</td>
                        <td>100-104</td>
                        <td>106-110</td>
                        <td>112-116</td>
                        <td>118-122</td>
                        <td>124-128</td>
                      </tr>
                      <tr>
                        <td>
                          &SHcy;&icy;&rcy;&icy;&ncy;&acy;
                          &pcy;&lcy;&iecy;&chcy;&iecy;&jcy;
                        </td>
                        <td>42</td>
                        <td>44</td>
                        <td>46-48</td>
                        <td>48-50</td>
                        <td>50-52</td>
                        <td>52-54</td>
                        <td>54-56</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="size__tab-content" data-tab-content="women">
                  <table className="size-table center">
                    <tbody>
                      <tr>
                        <td>
                          &Rcy;&ocy;&zcy;&mcy;&iukcy;&rcy;
                          &mcy;&iukcy;&zhcy;&ncy;&acy;&rcy;&ocy;&dcy;&ncy;&icy;&jcy;
                        </td>
                        <td>XXS</td>
                        <td>XS</td>
                        <td>S</td>
                        <td>M</td>
                        <td>L</td>
                        <td>XL</td>
                        <td>XXL</td>
                        <td>XXXL</td>
                      </tr>
                      <tr>
                        <td>
                          &Rcy;&ocy;&zcy;&mcy;&iukcy;&rcy;
                          &ucy;&kcy;&rcy;&acy;&yicy;&ncy;&scy;&kcy;&icy;&jcy;
                        </td>
                        <td>38-40</td>
                        <td>40-42</td>
                        <td>42-44</td>
                        <td>44-46</td>
                        <td>48</td>
                        <td>50-52</td>
                        <td>52-54</td>
                        <td>54-56</td>
                      </tr>
                      <tr>
                        <td>
                          &Rcy;&ocy;&zcy;&mcy;&iukcy;&rcy;
                          &iecy;&vcy;&rcy;&ocy;&pcy;&iecy;&jcy;&scy;&kcy;&jcy;
                        </td>
                        <td>30-32</td>
                        <td>32-34</td>
                        <td>36-38</td>
                        <td>40-42</td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                      </tr>
                      <tr>
                        <td>
                          &Ocy;&bcy;&apos;&jukcy;&mcy;
                          &gcy;&rcy;&ucy;&dcy;&iecy;&jcy;
                        </td>
                        <td>74-80</td>
                        <td>76-84</td>
                        <td>86-92</td>
                        <td>92-96</td>
                        <td>98-106</td>
                        <td>106-112</td>
                        <td>114-120</td>
                        <td>122-128</td>
                      </tr>
                      <tr>
                        <td>
                          &Ocy;&bcy;&apos;&jukcy;&mcy;
                          &scy;&tcy;&iecy;&gcy;&ocy;&ncy;
                        </td>
                        <td>84-88</td>
                        <td>86-90</td>
                        <td>92-96</td>
                        <td>96-102</td>
                        <td>102-108</td>
                        <td>108-114</td>
                        <td>116-120</td>
                        <td>122-128</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="size__tab-content"
                  data-tab-content="children"
                >
                  <table className="size-table center">
                    <tbody>
                      <tr>
                        <td>&Vcy;&iukcy;&kcy;</td>
                        <td>1-2</td>
                        <td>3-4</td>
                        <td>5-6</td>
                        <td>6-7</td>
                        <td>7-8</td>
                        <td>9-10</td>
                        <td>11-12</td>
                        <td>13-14</td>
                      </tr>
                      <tr>
                        <td>&Zcy;&rcy;&iukcy;&scy;&tcy;</td>
                        <td>92</td>
                        <td>104</td>
                        <td>116</td>
                        <td>122</td>
                        <td>128-132</td>
                        <td>140</td>
                        <td>152</td>
                        <td>164</td>
                      </tr>
                      <tr>
                        <td>&Rcy;&ocy;&zcy;&mcy;&iukcy;&rcy;</td>
                        <td>26</td>
                        <td>28</td>
                        <td>30</td>
                        <td>30</td>
                        <td>32</td>
                        <td>34</td>
                        <td>36</td>
                        <td>38</td>
                      </tr>
                      <tr>
                        <td>
                          &Dcy;&ocy;&vcy;&zhcy;&icy;&ncy;&acy;
                          &rcy;&ucy;&kcy;&acy;&vcy;&acy;
                        </td>
                        <td>28</td>
                        <td>37</td>
                        <td>42</td>
                        <td>44</td>
                        <td>47</td>
                        <td>52</td>
                        <td>56</td>
                        <td>61</td>
                      </tr>
                      <tr>
                        <td>
                          &Ocy;&bcy;&khcy;&vcy;&acy;&tcy;
                          &gcy;&rcy;&ucy;&dcy;&iecy;&jcy;
                        </td>
                        <td>30</td>
                        <td>53</td>
                        <td>62</td>
                        <td>64</td>
                        <td>66</td>
                        <td>72</td>
                        <td>78</td>
                        <td>84</td>
                      </tr>
                      <tr>
                        <td>
                          &Ocy;&bcy;&khcy;&vcy;&acy;&tcy;
                          &scy;&tcy;&iecy;&gcy;&ocy;&ncy;
                        </td>
                        <td>30</td>
                        <td>62</td>
                        <td>66</td>
                        <td>68</td>
                        <td>70</td>
                        <td>76</td>
                        <td>82</td>
                        <td>88</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Size