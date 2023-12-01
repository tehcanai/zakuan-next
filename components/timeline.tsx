import { Timeline, Text } from '@mantine/core';

function Chronology() {
  return (
    <Timeline active={3} bulletSize={24} lineWidth={2} color="red">
      <Timeline.Item  color="red" title="UPM">
        <Text color="dimmed" size="sm">Studied Computer Science at Universiti Putra Malaysia, UPM for 4 years</Text>
        <Text color="dimmed" size="xs" mt={4}>2019 - 2023</Text>
      </Timeline.Item>

      <Timeline.Item  title="SANDS Consulting">
        <Text color="dimmed" size="sm">Internship @ SANDS Consulting for 6 months. Developed the 
        <a href="https://apps.apple.com/my/app/mywakalah/id1544712828" style={{color:'rgb(179,179,179)', textDecoration: 'underline'}}> MyWakalah </a> mobile app</Text>
        <Text color="dimmed" size="xs" mt={4}>March 2023</Text>
      </Timeline.Item>

      <Timeline.Item  title="IKHLAS Travel">
        <Text color="dimmed" size="sm">Joined Ikhlas @ AirAsia as a junior software engineer</Text>
        <Text color="dimmed" size="xs" mt={4}>October 2023</Text>
      </Timeline.Item>
    </Timeline>
  );
}

export default Chronology;