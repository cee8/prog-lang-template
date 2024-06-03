import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Avatar, styled, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const TeamMemberCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
  backgroundColor: theme.palette.background.paper,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const TeamMemberAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  marginBottom: theme.spacing(2),
}));

const TeamMemberName = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}));

const TeamMemberBio = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  '& > *': {
    margin: theme.spacing(0, 1),
  },
}));

const CommunitySection = () => {
  const teamMembers = [
    {
      name: 'Chris Beaudoin',
      role: 'The creator',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget risus.',
      avatar: 'path/to/john-doe-avatar.jpg',
      github: 'https://github.com/cee8',
      linkedin: 'https://www.linkedin.com/in/-beaudoin',
      twitter: 'https://twitter.com/chris-beauds',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget risus.',
      avatar: 'path/to/jane-smith-avatar.jpg',
      github: 'https://github.com/janesmith',
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
    },
    {
      name: 'Michael Johnson',
      role: 'Lead Developer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget risus.',
      avatar: 'path/to/michael-johnson-avatar.jpg',
      github: 'https://github.com/michaeljohnson',
      linkedin: 'https://www.linkedin.com/in/michaeljohnson',
      twitter: 'https://x.com/michaeljohnson',
    },
    {
      name: 'Emily Davis',
      role: 'UI/UX Designer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget risus.',
      avatar: 'path/to/emily-davis-avatar.jpg',
      github: 'https://github.com/emilydavis',
      linkedin: 'https://www.linkedin.com/in/emilydavis',
      twitter: 'https://twitter.com/emilydavis',
    },
    {
      name: 'David Wilson',
      role: 'Marketing Manager',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget risus.',
      avatar: 'path/to/david-wilson-avatar.jpg',
      github: 'https://github.com/davidwilson',
      linkedin: 'https://www.linkedin.com/in/davidwilson',
      twitter: 'https://twitter.com/davidwilson',
    },
  ];

  return (
    <Box>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <TeamMemberCard>
              <TeamMemberAvatar src={member.avatar} alt={member.name} />
              <CardContent>
                <TeamMemberName variant="h6">{member.name}</TeamMemberName>
                <Typography color="textSecondary" gutterBottom>
                  {member.role}
                </Typography>
                <TeamMemberBio>{member.bio}</TeamMemberBio>
                <SocialLinks>
                  <IconButton href={member.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                  </IconButton>
                </SocialLinks>
              </CardContent>
            </TeamMemberCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CommunitySection;
