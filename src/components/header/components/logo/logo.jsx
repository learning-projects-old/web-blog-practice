import styled from 'styled-components';

const LargeText = styled.div`
    font-size: 32px;
    font-weight: bold;
`;

const SmallText = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const LogoContainer = ({ className }) => (
    <div className={className}>
        <i className="fa fa-code" aria-hidden="true" />
        <div>
            <LargeText>Блог</LargeText>
            <SmallText>веб-разработчика</SmallText>
        </div>
    </div>
);

export const Logo = styled(LogoContainer)`
    display: flex;
    align-items: center;
    gap: 8px;

    i {
        font-size: 32px;
    }
`;
