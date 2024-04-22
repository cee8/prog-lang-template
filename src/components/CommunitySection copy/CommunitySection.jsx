import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Avatar, styled } from '@mui/material';

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
}));

const CommunitySection = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget risus.',
      avatar: 'path/to/john-doe-avatar.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget risus.',
      avatar: 'path/to/jane-smith-avatar.jpg',
    },
    {
      name: 'Michael Johnson',
      role: 'Lead Developer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget risus.',
      avatar: 'path/to/michael-johnson-avatar.jpg',
    },
    {
      name: 'Emily Davis',
      role: 'UI/UX Designer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget risus.',
      avatar: 'path/to/emily-davis-avatar.jpg',
    },
    {
      name: 'David Wilson',
      role: 'Marketing Manager',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget risus.',
      avatar: 'path/to/david-wilson-avatar.jpg',
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
              </CardContent>
            </TeamMemberCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CommunitySection;