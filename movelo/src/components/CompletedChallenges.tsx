export function CompletedChallenges() {
    return (
        <div className={styles.completedChallenges}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}
