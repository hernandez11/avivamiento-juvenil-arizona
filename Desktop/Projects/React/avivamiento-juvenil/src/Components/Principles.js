import React from 'react';
import { Principle__container, Principle__itemWrapper, Principle__itemT, Principle__itemB, Item__num, Item__key } from './StyledText';

function Principles() {
    return (
        <div>
            <Principle__container>
                <Principle__itemWrapper>
                    <Principle__itemT>
                        <Item__num>01</Item__num>
                        <Item__key>BELIEFS</Item__key>
                    </Principle__itemT>
                    <Principle__itemB>We believe that only God brings meaning to life & happiness is found in his presence. With out his presence, our live lacks vision and purpose.</Principle__itemB>
                </Principle__itemWrapper>

                <Principle__itemWrapper>
                    <Principle__itemT>
                        <Item__num>02</Item__num>
                        <Item__key>MISSION</Item__key>
                    </Principle__itemT>
                    <Principle__itemB>Bringing youth together to worship and grow closer to the creator of all things.</Principle__itemB>
                </Principle__itemWrapper>

                <Principle__itemWrapper>
                    <Principle__itemT>
                        <Item__num>03</Item__num>
                        <Item__key>VISION</Item__key>
                    </Principle__itemT>
                    <Principle__itemB>encourage youth to follow Christ and gain salvation</Principle__itemB>
                </Principle__itemWrapper>
            </Principle__container>
        </div>
    )
}

export default Principles
