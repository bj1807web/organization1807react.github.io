import React, { Component } from 'react'
import './index.scss'
export default class Fabu extends Component {
    render() {
        return (
            <div className='fb-box'>
                <div style={{ padding: "30px 20px" }}>
                    <div className='fb-g-hd flex flex-bw'>
                        <div className='sel sela'>
                            {/* <div className='flex'>发布文章

                            </div> */}

                            <select name="" id="" className="shou-select">
                                <option value="" className="shou-option">
                                    LOFTER首页
</option>
                                <option value="" className="shou-option">
                                    发布文章
</option>
                                <option value="" className="shou-option">
                                    喜欢的文章
</option>
                                <option value="" className="shou-option">
                                    发现
</option>
                                <option value="" className="shou-option">
                                    关注的博客
</option>
                                <option value="" className="shou-option">
                                    ——我的博客——
</option>
                                <option value="" className="shou-option">
                                    name
</option>
                            </select>

                        </div>
                        <div className='sel'>
                            <select name="" id="" className="shou-select">
                                <option value="" className="shou-option">
                                    发布文字
</option>
                                <option value="" className="shou-option">
                                    发布图片
</option>

                            </select>
                        </div>
                    </div>
                    <div className='fb-content-box'>
                        <div className='fb-m-edit'>
                            <div className='main-head'>
                                <input maxlength="50" type="text" placeholder="文章标题" ></input>
                            </div>
                        </div>
                        <div className='editor'>
                            <div className='w-ipt'>
                                <textarea placeholder="正文"></textarea>
                            </div>
                        </div>
                        <div className='fb-option'>
                            <div>选项</div>
                            <div className='fb-s'>发布到:genuine的博客</div>
                            <div className='san'></div>
                        </div>
                        <div className='btn'>
                            <button type='submit' className='btn-con'>发布</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
