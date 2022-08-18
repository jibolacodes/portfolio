import React from 'react';
import { Container, LinkButtons } from "./WorkButton";
import { UilImages } from '@iconscout/react-unicons';
import { UilExternalLinkAlt } from '@iconscout/react-unicons'
import { UilCodeBranch } from '@iconscout/react-unicons';

const WorkButton = () => ((
    <Container>
        <UilImages className="gallery" />
        <LinkButtons>
            <UilExternalLinkAlt />
            <UilCodeBranch />
        </LinkButtons>
    </Container>
));

export default WorkButton;