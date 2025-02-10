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
                <div className='statement'>聂润泽</div>
            </div>
        </FooterWrapper>
    )
} 