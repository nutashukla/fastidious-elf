import image1 from './data/slack.svg'
import image2 from './data/pie.png'
function Page() {
    return (

        <div className="body">
            <div className="body1">
                <div className='body11'>
                    <h2>Dashboard</h2>

                    <button><p><img src={image1} alt="why not visisble" /> Dashboard </p> <span>&gt;</span></button>
                    <button><p><img src={image1} alt="why not visisble" />Product</p><span>&gt;</span></button>
                    <button><p><img src={image1} alt="why not visisble" />Customer</p><span>&gt;</span></button>
                    <button><p><img src={image1} alt="why not visisble" />Income</p><span>&gt;</span></button>
                    <button><p><img src={image1} alt="why not visisble" />Promote</p><span>&gt;</span></button>
                    <button><p><img src={image1} alt="why not visisble" />Help</p><span>&gt;</span></button>
                </div>
                <div className='PMang'>
                    <div>
                        <p><strong>Evano</strong></p>
                        <p >Project Manager</p>
                    </div>
                    <p>&#x1F893;</p>
                </div>
            </div>
            <div className="body2">
                <div className='upper1'>
                    <div className="up1">
                        <img src={image1} alt="" />
                        <div className='up11'><p>Earning</p>
                            <p> &#36;198K</p>
                            <p><strong>&#8593; 37.8%</strong> this month</p></div>

                    </div>
                    <div className="up1"><img src={image1} alt="" />
                        <div className='up11'><p>Orders</p>
                            <p> &#36;2.4K</p>
                            <p><strong>&#8593; 2.8%</strong> this month</p></div>
                    </div>
                    <div className="up1"><img src={image1} alt="" />
                        <div className='up11'><p>Balance</p>
                            <p> &#36;2.4K</p>
                            <p><strong>&#8593; 2.8%</strong> this month</p></div>s
                    </div>
                    <div className="up1"><img src={image1} alt="" />
                        <div className='up11'><p>Toatal sales</p>
                            <p> &#36;88K</p>
                            <p><strong>&#8593; 17.8%</strong> this month</p></div>
                    </div>
                </div>
                <div className='upper2'>
                    <div className="up21" >
                        <div className='bar1'>
                            <div>
                                <p><strong>Overview</strong></p>
                                <p>Monthly Earning</p>
                            </div>
                            <div>
                                Quaterly &#x1F893;
                            </div>
                        </div>
                        <div className='bar'>
                            <div>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                            <div>
                                <p>jan</p>
                                <p>jan</p>
                                <p>jan</p>
                                <p>jan</p>
                                <p>jan</p>
                                <p>jan</p>
                                <p>jan</p>
                                <p>jan</p>
                                <p>jan</p>
                                <p>jan</p>
                                <p>jan</p>
                                <p>jan</p>
                            </div>
                        </div>
                        <div></div></div>
                    <div className="up22">

                        <div>
                            <p>Customers</p>
                            <p style={{ color: 'gray' }}>Customers that buy products</p>
                        </div>
                        <img src={image2} alt="loded or not?" />
                    </div>
                </div>

                <div className='upper3'>
                    <div className='lw1'>
                        <div><strong>Product Sell</strong></div>
                        <div>
                            <input type="text" placeholder='Search' />
                            <p>Last 30 days &#x1F893;</p>
                        </div>
                    </div>
                    <div className='lw2'>
                        <div>Product Name</div>
                        <div>
                            <p>stock</p>
                            <p>price</p>
                            <p>total sales</p>
                        </div>
                    </div>
                    <div className='lw3'><div><p><strong>Abstract 3d</strong>
                    </p><p >Lorem ipsum dolor sit amet consectetur adipisicing.</p></div>
                        <div>
                            <p>32 in stock</p>
                            <p><strong>&#36;45.99</strong></p>
                            <p>20</p>
                        </div></div>
                    <div className='lw4'>
                        <div><p><strong>Abstract 3d</strong>
                        </p>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing.</p></div>
                        <div>
                            <p>32 in stock</p>
                            <p><strong>&#36;45.99</strong></p>
                            <p>20</p>
                        </div></div>


                </div>
            </div>
        </div>

    )
}
export default Page