import React from 'react';
import img1 from '../../../Images/photo-1517101724602-c257fe568157.jpg';
import img2 from '../../../Images/photo-1559085013-6b2b49a4cf91.jpg';
import img3 from '../../../Images/photo-1560813562-fd09315f5ce8.jpg';

const Welcome = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row justify-content-center pt-5 pb-5">
                    <div style={{ color: '#ffffff' }} className="col-md-7">
                        <h1 className="pt-5">WELCOME TO <span className="text-style">PETCARE</span> </h1>
                        <p className=" mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus temporibus id quia sapiente, dolorem, eos tempora neque animi culpa laboriosam consequuntur excepturi quasi voluptate repellat nemo autem voluptas ab dolor?
                        Magnam quo laborum cumque optio. Repudiandae nesciunt aspernatur esse. Rerum soluta beatae delectus, fugiat amet modi explicabo dolorem autem praesentium provident, deserunt temporibus expedita cum inventore maiores ratione magnam quia.
                        Dolor velit minus nam odit. Molestiae simi poribus obcaecati vel, minus reprehenderit expedita rerum repellat quae modi nihil at quo voluptate iusto consequuntur. Voluptates culpa sunt cumque rerum at, consectetur consequuntur.
                        Adipisci modi ipsa ratione rem recusandae exercitationem, error fugiat harum, sequi id dolore voluptatem animi accusantium molestias totam expedita quam aliquid quasi tempora temporibus. Quod cupiditate enim officia id ex.</p>
                        <button className="btn btn-style"> Read More</button>
                    </div>
                    <div className="col-md-5">
                        <div className="row pb-2">
                            <img src={img1} alt="" />
                        </div>
                        <div className="row">
                            <img style={{ width: '50%' }} src={img2} alt="" />
                            <img style={{ width: '50%' }} src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;