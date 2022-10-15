import { DirectoryItemContainer, BackgroundImageContainer, BodyContainer } from './directory-item.style';
import { Navigate, useNavigate } from 'react-router-dom';


const DirectoryItem = ({ category }) =>
{
    const { imageUrl, title, id, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () =>
    {
        navigate(route);

    }

    return (

        <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
            <BackgroundImageContainer imageUrl={imageUrl} />
            <BodyContainer>
                <h2>{title}</h2>
                <p>Shop now</p>
            </BodyContainer>
        </DirectoryItemContainer>
    )

}

export default DirectoryItem;