import React, { useState } from "react";
import { FooterWrapper } from "./style"
import footerData from "@/assets/data/footer.json";
export default function AppFooter() {
    return (
        <FooterWrapper>
            <div className='wrapper'>
                <div className='service'>
                    {
                        footerData.map(item => {
                            return (
                                <div className='item' key={item.name}>
                                    <div className='name'>{item.name}</div>
                                    <div className='list'>
                                        {
                                            item.list.map(iten => {
                                                return <div className='iten' key={iten}>{iten}</div>
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='statement'>分开了附件打开拉萨分解哦我给你发动机时空裂缝嘉兴仓v发给第三方但是柳卡进入</div>
            </div>
        </FooterWrapper>
    )
} 